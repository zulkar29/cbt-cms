import { useEffect, useState } from 'react';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import CustomIconArea from '../../components/custom-icon-area';
import EditButton from '../../components/button/edit';
import DeleteButton from '../../components/button/delete';
import axios from '../../lib';
import { API_URL } from '../../constants';
import { toast } from 'react-toastify';
import { Attribute, IAttributeResponse } from '../../interfaces/attribute';

// Assuming your data is stored in a file named types.ts

const Attributes = () => {
  const [attributes, setAttributes] = useState<Attribute[]>([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  const fetchData = async () => {
    try {
      const response = await axios.get<IAttributeResponse>(
        `${API_URL}/attributes`
      );

      // Handle successful response
      console.log('Fetched data successfully', response.data);

      // Update state with the fetched data
      setAttributes(response.data?.data?.rows);
    } catch (error) {
      // Handle error
      console.error('Failed to fetch data', error);
    }
  };

  const handleDeleteAttribute = async (id: number) => {
    try {
      const response = await axios.delete(`${API_URL}/attributes?ids=[${id}]`);

      if (response.status === 200) {
        toast.success(response.data.message);
        console.log(`Attribute with id ${id} deleted successfully`);

        // Refresh the data after deletion
        fetchData();
      } else {
        // Handle unsuccessful deletion
        console.error(`Failed to delete attribute with id ${id}`);
      }
    } catch (error) {
      // Handle error
      console.error('Error while deleting attribute', error);
    }
  };

  return (
    <div>
      <CardBody header="Attributes" to="/attributes/create" />
      <Display>
        <Row className="row">
          <Column className="col-md-5">Attributes</Column>
          <Column className="col-md-5">Attributes Value</Column>
          <Column className="col-md-2">Actions</Column>
        </Row>
        {attributes.map((attribute, index) => (
          <Row className="row" key={index}>
            <Column className="col-md-5">{attribute.name}</Column>
            <Column className="col-md-5">{attribute.value}</Column>
            <Column className="col-md-2">
              <CustomIconArea>
                <EditButton editUrl={`/attributes/edit/${attribute.id}`} />
                <DeleteButton
                  onClick={() => handleDeleteAttribute(attribute.id)}
                />
              </CustomIconArea>
            </Column>
          </Row>
        ))}
      </Display>
    </div>
  );
};

export default Attributes;
