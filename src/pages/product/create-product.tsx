import { useState, useEffect, ChangeEvent } from 'react';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Input from '../../components/forms/text-input';
import FileInput from '../../components/forms/file-input';
import DescriptionInput from '../../components/description';
import { Button } from '../../components/button';
import TextArea from '../../components/forms/textarea';
import './create-product.scss';
import Select from '../../components/select';
import ToggleButton from '../../components/forms/checkbox';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getCategories } from '../../redux/category/categorySlice';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.css';
import { RxCross2 } from 'react-icons/rx';

const CreateProduct: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.category);
  const [dateRange, setDateRange] = useState<[Date, Date] | null>(null);
  const [title, setTile] = useState<string>('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [galleryImage, setGalleryImage] = useState<File[] | null>(null);
  const [category, setCategory] = useState<string>('');
  const [quantity, setQuantity] = useState(0);
  const [regularPrice, setRegularPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [videoUrl, setVideoUrl] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaName, setMetaName] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [isSale, setIsSale] = useState(true);
  const [isFeature, setIsFeature] = useState(true);
  const [isNew, setIsNew] = useState(true);
  const [sortDesc, setSortDesc] = useState(true);
  const [policy, setPolicy] = useState('');

  const handleDateRangeChange = (dateRange: [Date, Date]) => {
    setDateRange(dateRange);
  };

  const handleLogoChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setImage(file);
    }
  };
  const handleGalleryImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setGalleryImage(files);
    }
  };

  useEffect(() => {
    dispatch(getCategories({}));
  }, [dispatch]);

  return (
    <div className="create-product">
      <CardBody header="Create Product" to="/products" text="back" />
      <form>
        <div className="row">
          <div className="col-md-8">
            <div className="left-body">
              <Display>
                <Input
                  label="Product Title *"
                  placeholder="Enter Name"
                  htmlFor="name"
                  onBlur={(e) => setTile(e.target.value)}
                  required
                />
                <Input
                  label="Slug *"
                  placeholder="Enter Slug"
                  htmlFor="slug"
                  onBlur={(e) => setSlug(e.target.value)}
                  required
                />
              </Display>

              <Display>
                <FileInput
                  label="Featured Image *"
                  onChange={handleChangeFile}
                  required
                />
                <p className="wearing">
                  Image Size Should Be 800 x 800.
                  <br /> or square size
                </p>

                <DateRangePicker
                  className="date-area"
                  value={dateRange}
                  onChange={handleDateRangeChange}
                />
              </Display>

              <Display>
                <Input
                  placeholder="Video Link"
                  label="Video Link"
                  htmlFor="video"
                  onBlur={(e) => setVideoUrl(e.target.value)}
                />
                <p className="wearing">
                  Use proper link without extra parameter.
                  <br /> Don't use short share link/embedded iframe code.
                </p>
              </Display>

              <Display>
                <FileInput
                  label="Gallery Images"
                  multiple
                  required
                  onChange={handleChangeFile}
                />
                />
                <div className="row">
                  {galleryImages &&
                    galleryImages.length > 0 &&
                    galleryImages.map((image, index) => (
                      <div key={index} className="product-image">
                        <img
                          src={URL.createObjectURL(image)}
                          alt="gazi home appliance"
                        />
                        <span
                          className="cross"
                          onClick={() => removeGalleryImage(image)}
                        >
                          <RxCross2 />
                        </span>
                      </div>
                    ))}
                </div>
                <p className="wearing">
                  Image Size Should Be 800 x 800. or square size
                </p>
              </Display>
              <Display>
                <h5 className="product-title">Product Description</h5>
                <div className="des-none">
                  <TextArea label="Description" value={description} required />
                </div>
                <DescriptionInput
                  value={description}
                  setValue={setDescription}
                />
                <h5 className="product-title">Product Policy</h5>
                <div className="des-none">
                  <TextArea label="policy" value={policy} required />
                </div>
                <DescriptionInput value={policy} setValue={setPolicy} />
              </Display>
            </div>
          </div>
          <div className="col-md-4">
            <div className="right-body">
              <Display>
                <Button className="save-btn" type="submit">
                  Save & Publish
                </Button>
                <Button type="submit">Save & Unpublished</Button>
              </Display>

              <Display>
                <Input
                  type="number"
                  placeholder="Regular Price"
                  label="Regular Price"
                  htmlFor="regular-price"
                  onChange={(e) => setRegularPrice(e.target.value)}
                  required
                />
                <div className="discount-area">
                  <Input
                    placeholder="Discount Price"
                    label="Discount Price"
                    htmlFor="discount-price"
                    required
                  />
                  <div>
                    <Select>
                      <option selected>Flat</option>
                      <option>Percent</option>
                    </Select>
                  </div>
                </div>
                <Input htmlFor="data" label="Date" />
              </Display>

              <Display>
                <label className="label">Select Category*</label>
                <Select required>
                  {categories.map((category) => (
                    <option key={category.id} value={category.slug}>
                      {category.title}
                    </option>
                  ))}
                </Select>
                <TextArea
                  label="Product short description *"
                  placeholder="Product short description"
                />
                <Input
                  placeholder="Quantity"
                  label="Quantity"
                  htmlFor="Quantity"
                  defaultValue="0"
                  required
                />
              </Display>

              <Display>
                <div className="sudo-item">
                  <span>Is New</span>
                  <ToggleButton
                    isChecked={isNew}
                    onClick={() => setIsNew(!isNew)}
                  />
                </div>
                <div className="sudo-item">
                  <span>Is Sale</span>
                  <ToggleButton
                    isChecked={isSale}
                    onClick={() => setIsSale(!isSale)}
                  />
                </div>
                <div className="sudo-item">
                  <span>Is Feature</span>
                  <ToggleButton
                    isChecked={isFeature}
                    onClick={() => setIsFeature(!isFeature)}
                  />
                </div>
              </Display>
              <Display>
                <Input
                  placeholder="Meta Title"
                  htmlFor="meta-title"
                  onBlur={(e) => setMetaTitle(e.target.value)}
                />
                <Input
                  placeholder="Meta Name"
                  htmlFor="meta-name"
                  onBlur={(e) => setMetaName(e.target.value)}
                />
                <TextArea
                  placeholder="Meta Description"
                  onBlur={(e) => setMetaDescription(e.target.value)}
                />
              </Display>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
