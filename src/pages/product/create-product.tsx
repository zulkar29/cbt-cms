import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Input from '../../components/forms/text-input';
import FileInput from '../../components/forms/file-input';
import DescriptionInput from '../../components/description';
import { Button } from '../../components/button';
import TextArea from '../../components/forms/textarea';
import Select from '../../components/select';
import './create-product.scss';
import ToggleButton from '../../components/forms/checkbox';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getCategories } from '../../redux/category/categorySlice';
import { DateRangePicker } from 'rsuite';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';
import { createProduct, reset } from '../../redux/products/product-slice';
import 'rsuite/dist/rsuite.css';

const CreateProduct: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.category);
  const [campaignDate, setCampaignDate] = useState<[Date, Date] | null>(null);
  const { isCreate } = useAppSelector((state) => state.product);
  const [title, setTile] = useState<string>('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [galleryImages, setGalleryImages] = useState<File[] | null>(null);
  const [category, setCategory] = useState<string>('');
  const [quantity, setQuantity] = useState(0);
  const [regularPrice, setRegularPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [discountType, setDiscountType] = useState<'percent' | 'flat' | ''>('');
  const [status, setStatus] = useState(true);
  const [discount, setDiscount] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [videoUrl, setVideoUrl] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaName, setMetaName] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [isSale, setIsSale] = useState(true);
  const [isFeature, setIsFeature] = useState(true);
  const [isNew, setIsNew] = useState(true);
  const [sortDesc, setSortDesc] = useState('');
  const [policy, setPolicy] = useState('');
  const [availability, setAvailability] = useState(true);

  /*   console.log({
    campaignDate,
    title,
    slug,
    description,
    image,
    galleryImages,
    category,
    quantity,
    regularPrice,
    discountPrice,
    discountType,
    discount,
    deliveryFee,
    videoUrl,
    metaTitle,
    metaName,
    metaDescription,
    isSale,
    isFeature,
    isNew,
    sortDesc,
    policy,
    availability,
  }); */

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setImage(file);
    }
  };
  const handleGalleryImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setGalleryImages(files);
    }
  };
  const removeGalleryImage = (file: File) => {
    if (galleryImages !== null) {
      const filterImages = galleryImages.filter(
        (singleFile) => singleFile.name != file.name
      );
      setGalleryImages(filterImages);
    }
  };

  const handleProductSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('title', title);
    formData.append('slug', slug);
    formData.append('description', description);
    if (image !== null) {
      formData.append('image', image);
    }
    formData.append('category_slug', category);
    formData.append('quantity', quantity.toString());
    formData.append('regular_price', regularPrice.toString());
    formData.append('discount_price', discountPrice.toString());
    formData.append('delivery_fee', deliveryFee.toString());
    formData.append('status', status.toString());
    formData.append('video_url', videoUrl);
    if (campaignDate !== null) {
      formData.append('camping_start_date', campaignDate[0].toString());
      formData.append('camping_end_date', campaignDate[1].toString());
    }
    formData.append('upload_by', 'admin');
    formData.append('availability', availability.toString());
    galleryImages?.forEach((g_image, index) => {
      formData.append('gallery_image', g_image);
      formData.append('order_number', index.toString());
    });
    formData.append('meta_title', metaTitle);
    formData.append('meta_name', metaName);
    formData.append('meta_description', metaDescription);
    formData.append('sort_description', sortDesc);
    formData.append('is_homepage', '1');

    formData.append('is_sale', isSale.toString());
    formData.append('is_feature', isFeature.toString());
    formData.append('is_new', isNew.toString());

    dispatch(createProduct(formData));
  };

  useEffect(() => {
    if (discountType === 'flat') {
      setDiscountPrice(regularPrice - discount);
    } else {
      setDiscountPrice(regularPrice - (regularPrice * discount) / 100);
    }
  }, [discountType, regularPrice, discount]);

  useEffect(() => {
    if (isCreate) {
      toast.success('Product created successfully');
    }
    return () => {
      dispatch(reset());
    };
  }, [dispatch, isCreate]);

  useEffect(() => {
    dispatch(getCategories({}));

    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  return (
    <div className="create-product">
      <CardBody header="Create Product" to="/products" text="back" />
      <form onSubmit={handleProductSubmit}>
        <div className="row">
          <div className="col-md-8">
            <div className="left-body">
              <Display>
                <Input
                  label="Product Title *"
                  placeholder="Enter Name"
                  onBlur={(e) => setTile(e.target.value)}
                  htmlFor="name"
                  required
                />
                <Input
                  label="Slug *"
                  placeholder="Enter Slug"
                  onBlur={(e) => setSlug(e.target.value)}
                  htmlFor="slug"
                  required
                />
              </Display>

              <Display>
                <FileInput
                  label="Featured Image *"
                  onChange={handleImageChange}
                  required
                />
                <p className="wearing">
                  Image Size Should Be 800 x 800.
                  <br /> or square size
                </p>
                {image && (
                  <div className="product-image">
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
                )}
                <br />
              </Display>

              <Display>
                <label htmlFor="">Campaign Date</label>
                <DateRangePicker
                  className={`date-area`}
                  value={campaignDate}
                  onChange={(dateRange) => setCampaignDate(dateRange)}
                />
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
                  onChange={handleGalleryImageChange}
                  multiple
                  required
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
                  placeholder="Regular Price"
                  label="Regular Price"
                  htmlFor="regular-price"
                  onChange={(e) => setRegularPrice(Number(e.target.value))}
                  required
                />
                <div className="discount-area">
                  <Input
                    placeholder="Discount Price"
                    label="Discount Price"
                    htmlFor="discount-price"
                    onChange={(e) => setDiscount(Number(e.target.value))}
                    required
                  />
                  <div>
                    <Select
                      onChange={(e) =>
                        setDiscountType(e.target.value as 'flat' | 'percent')
                      }
                    >
                      <option value="flat">Flat</option>
                      <option value="percent">Percent</option>
                    </Select>
                  </div>
                </div>
              </Display>

              <Display>
                <label className="label">Select Category*</label>
                <Select onChange={(e) => setCategory(e.target.value)} required>
                  {categories.map((category) => (
                    <option key={category.id} value={category.slug}>
                      {category.title}
                    </option>
                  ))}
                </Select>
                <TextArea
                  label="Product short description *"
                  placeholder="Product short description"
                  onBlur={(e) => setSortDesc(e.target.value)}
                />
                <Input
                  type="number"
                  placeholder="Quantity"
                  label="Quantity"
                  htmlFor="Quantity"
                  onBlur={(e) => setQuantity(Number(e.target.value))}
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
                <div className="sudo-item">
                  <span>Status</span>
                  <ToggleButton
                    isChecked={status}
                    onClick={() => setStatus(!status)}
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
