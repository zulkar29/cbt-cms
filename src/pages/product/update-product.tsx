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
import 'rsuite/dist/rsuite.css';
import { reset, updateProduct } from '../../redux/products/product-slice';
import axios from 'axios';
import { API_ROOT, API_URL } from '../../constants';
import { useNavigate, useParams } from 'react-router-dom';
interface IPhoto {
  id: number;
  product_id: number;
  image: string;
  order_number: number;
  created_at: string;
  updated_at: string;
}

const UpdateProduct: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.category);
  const [campaignDate, setCampaignDate] = useState<[Date, Date] | null>(null);
  const { isUpdate, isError, message } = useAppSelector(
    (state) => state.product
  );
  const [title, setTile] = useState<string>('');
  const [url, setUrl] = useState('');
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

  console.log(discountPrice);

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
    formData.append('slug', url);
    formData.append('description', description);
    formData.append('policy', policy);
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
    /* if (campaignDate !== null) {
      formData.append('camping_start_date', campaignDate[0].toString());
      formData.append('camping_end_date', campaignDate[1].toString());
    } */
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

    dispatch(updateProduct({ id: Number(slug), productData: formData }));
  };

  useEffect(() => {
    if (discountType === 'flat') {
      setDiscountPrice(regularPrice - discount);
    } else {
      setDiscountPrice(regularPrice - (regularPrice * discount) / 100);
    }
  }, [discountType, regularPrice, discount]);

  useEffect(() => {
    if (isUpdate) {
      toast.success(`${message}`);
      // navigate('/products');
    }
    if (isError) {
      toast.error(`${message}`);
    }
    return () => {
      dispatch(reset());
    };
  }, [dispatch, isUpdate]);

  useEffect(() => {
    dispatch(getCategories({}));
  }, [dispatch]);

  useEffect(() => {
    const fetchEmiData = async () => {
      try {
        const response = await axios.get(`${API_URL}/products/${slug}`);
        const { data } = response.data;

        setTile(data.title);
        setUrl(data.slug);
        setDescription(data.description);
        setImage(data.image);
        setCategory(data.category_slug);
        setQuantity(data.quantity);
        setRegularPrice(data.regular_price);
        setDiscountPrice(data.discount_price);
        setDiscountType('');
        setStatus(data.is_visible === 1);
        setDiscount(data.discount);
        setDeliveryFee(data.delivery_fee);
        setVideoUrl(data.video_url);
        setMetaTitle(data.meta_title);
        setMetaName(data.meta_name);
        setMetaDescription(data.meta_description);
        setIsSale(data.is_sale === 1);
        setIsFeature(data.is_feature === 1);
        setIsNew(data.is_new === 1);
        setSortDesc(data.sort_description);
        setPolicy(data.policy || '');
        setAvailability(data.availability === 1);

        if (data.camping_start_date && data.camping_end_date) {
          setCampaignDate([
            new Date(data.camping_start_date),
            new Date(data.camping_end_date),
          ]);
        }

        if (data['product-photos'] && data['product-photos'].length > 0) {
          const galleryImageFiles = data['product-photos'].map(
            (photo: IPhoto) => ({
              id: photo.id,
              product_id: photo.product_id,
              image: photo.image,
              order_number: photo.order_number,
              created_at: photo.created_at,
              updated_at: photo.updated_at,
            })
          );
          setGalleryImages(galleryImageFiles);
        }
      } catch (error) {
        console.error('Error fetching EMI data:', error);
      }
    };
    fetchEmiData();
  }, [slug]);

  return (
    <div className="create-product">
      <CardBody header="Update Product" to="/products" text="back" />
      <form onSubmit={handleProductSubmit}>
        <div className="row">
          <div className="col-md-8">
            <div className="left-body">
              <Display>
                <Input
                  label="Product Title *"
                  placeholder="Enter Name"
                  value={title}
                  onChange={(e) => setTile(e.target.value)}
                  htmlFor="name"
                  required
                />
                <Input
                  label="Slug *"
                  value={url}
                  placeholder="Enter Slug"
                  onChange={(e) => setUrl(e.target.value)}
                  htmlFor="slug"
                  required
                />
              </Display>

              <Display>
                <FileInput
                  label="Featured Image *"
                  onChange={handleImageChange}
                />
                <p className="wearing">
                  Image Size Should Be 600 x 600.
                  <br /> or square size
                </p>
                {typeof image === 'string' && (
                  <div className="product-image">
                    <img
                      src={`${API_ROOT}/images/product/${image}`}
                      alt="gazi home appliance"
                    />
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
                  value={videoUrl}
                  htmlFor="video"
                  onChange={(e) => setVideoUrl(e.target.value)}
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
                />
                <div className="row">
                  {galleryImages &&
                    galleryImages.length > 0 &&
                    galleryImages.map((image, index) => (
                      <div key={index} className="product-image">
                        {/*  <img
                          src={URL.createObjectURL(image)}
                          alt="gazi home appliance"
                        /> */}
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
                  Save & Update
                </Button>
              </Display>

              <Display>
                <Input
                  placeholder="Regular Price"
                  label="Regular Price"
                  htmlFor="regular-price"
                  value={regularPrice}
                  onChange={(e) => setRegularPrice(Number(e.target.value))}
                  required
                />
                <div className="discount-area">
                  <Input
                    placeholder="Discount Price"
                    label="Discount Price"
                    htmlFor="discount-price"
                    value={discountPrice}
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
                  {categories.map((ctg) => (
                    <option
                      key={ctg.id}
                      value={ctg.slug}
                      selected={ctg.slug === category}
                    >
                      {ctg.title}
                    </option>
                  ))}
                </Select>
                <TextArea
                  label="Product short description *"
                  placeholder="Product short description"
                  value={sortDesc}
                  onChange={(e) => setSortDesc(e.target.value)}
                />
                <Input
                  type="number"
                  placeholder="Quantity"
                  label="Quantity"
                  htmlFor="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
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
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                />
                <Input
                  placeholder="Meta Name"
                  htmlFor="meta-name"
                  value={metaName}
                  onChange={(e) => setMetaName(e.target.value)}
                />
                <TextArea
                  placeholder="Meta Description"
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                />
              </Display>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
