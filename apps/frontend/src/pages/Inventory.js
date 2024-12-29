import { useState, useEffect } from "react";
import { Box, Button } from "@chakra-ui/react";
import axios from "axios";
import CustomTable from "../components/Table";
import CustomModal from "../components/Modal";
import FormInput from "../components/FormInput";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", category: "", stock_quantity: 0, price_per_unit: 0 });

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const handleAddProduct = async () => {
    try {
      await axios.post("/api/products", newProduct);
      setIsModalOpen(false);
      setNewProduct({ name: "", category: "", stock_quantity: 0, price_per_unit: 0 });
      const response = await axios.get("/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box p={5}>
      <Button colorScheme="teal" onClick={() => setIsModalOpen(true)}>Add Product</Button>
      <CustomTable columns={["name", "category", "stock_quantity", "price_per_unit"]} data={products} />
      <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Product">
        <FormInput label="Name" type="text" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
        <FormInput label="Category" type="text" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} />
        <FormInput label="Stock Quantity" type="number" value={newProduct.stock_quantity} onChange={(e) => setNewProduct({ ...newProduct, stock_quantity: parseInt(e.target.value) })} />
        <FormInput label="Price per Unit" type="number" value={newProduct.price_per_unit} onChange={(e) => setNewProduct({ ...newProduct, price_per_unit: parseFloat(e.target.value) })} />
        <Button colorScheme="teal" onClick={handleAddProduct}>Add Product</Button>
      </CustomModal>
    </Box>
  );
};

export default Inventory;