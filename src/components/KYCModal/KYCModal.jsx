import { useState } from "react";
import toast from "react-hot-toast";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

function KYCModal({ modal, setModal }) {
  const [formData, setFormData] = useState({
    frontId: null,
    backId: null,
    walletAddress: "",
    gmail: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const toggle = () => setModal(!modal);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.frontId ||
      !formData.backId ||
      !formData.gmail ||
      !formData.walletAddress
    )
      return;

    const data = new FormData();
    data.append("frontId", formData.frontId);
    data.append("backId", formData.backId);
    data.append("walletAddress", formData.walletAddress);
    data.append("gmail", formData.gmail);

    setIsLoading(true);

    fetch("https://kyc-project.onrender.com/api/v1/create-form", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        // toast.success("KYC successfully created");
      })
      .catch((error) => {
        console.log("ERROR:", error);
        // toast.error("KYC created failed!");
      })
      .finally(() => {
        setModal(false);
        setIsLoading(false);
        setFormData({
          frontId: null,
          backId: null,
          walletAddress: "",
          gmail: "",
        });
        toast.success("KYC successfully created");
      });
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Please Complete Your KYC</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="frontId">Front ID Card</Label>
              <Input
                id="frontId"
                type="file"
                name="frontId"
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="backId">Back ID Card</Label>
              <Input
                id="backId"
                type="file"
                name="backId"
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="walletAddress">Wallet Address</Label>
              <Input
                id="walletAddress"
                name="walletAddress"
                type="text"
                value={formData.walletAddress}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="gmail">Gmail</Label>
              <Input
                id="gmail"
                name="gmail"
                type="email"
                value={formData.gmail}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <button
              type="submit"
              className="focus:outline-none !border !border-[#0d6efd] text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white transition-all px-3 py-2 rounded-md"
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default KYCModal;
