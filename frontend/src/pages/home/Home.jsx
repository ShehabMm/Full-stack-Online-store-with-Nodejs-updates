import "./Home.css";
import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useGetproductsByNameQuery } from "../../Redux/productsApi";
import CircularProgress from "@mui/material/CircularProgress";
import { addToCart, deleteProductfromCart } from "Redux/counterSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ImageListMuiComponent from "MUI-components/imageList/imageList";
import SwiperComponent from "pages/swiper/swiper";
import ContactForm from "../../MUI-components/form/form";
import RealContact from "MUI-components/realContac/realContact";
import ScrollReveal from 'scrollreveal';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const Home = () => {
  // @ts-ignore
  const { allProductsID } = useSelector((state) => state.counter);

  const navigate = useNavigate();
  const { data, isLoading } = useGetproductsByNameQuery();
  const dispatch = useDispatch();




  // if (error) {
  //   return (
  //     <h1>sorry something wrong</h1>

  //   )
  // }

  if (isLoading) {
    return <CircularProgress />;
  }

  if (data) {
    return (
      <Stack className="mains"
        direction={"row"}
        sx={{ flexWrap: "wrap", justifyContent: "center" }}
      >


        {data.map((item, index) => {
          return (
            <Card
              className="card"
              key={item.id}
              sx={{ maxWidth: 277, mb: 6, mx: 2, }}

            >
              <CardMedia
                component="img"
                height="277"
                image={item.imageLink[2]}
                alt="Paella dish"
                onClick={() => {
                  navigate(`/productdetails/${item.id}`);
                }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions
                disableSpacing
                sx={{ justifyContent: "space-between" }}
              >
                {/* ..//add to cart button or increase,decrease */}

                {allProductsID.includes(item.id) ? (

                  <>
                    <Button
                      onClick={() => {
                        dispatch(deleteProductfromCart(item));



                      }}
                      sx={{
                        textTransform: "capitalize",
                        lineHeight: "1",
                        padding: "1.1",
                      }}
                      variant="contained"
                      color="primary"
                    >

                      remove from cart
                    </Button>


                  </>
                ) : (
                  <Button
                    onClick={() => {
                      dispatch(addToCart(item));

                    }}
                    sx={{
                      textTransform: "capitalize",
                      lineHeight: "1",

                      
                    }}
                    variant="contained"
                    color="primary"


                  >
        <ShoppingCartIcon fontSize='small'  sx={{mr:2}}  />


                    Add to Cart
                  </Button>
                )}

                <Typography mr={1} variant="body1" color="error">
                  ${item.price}
                </Typography>
              </CardActions>
            </Card>
          );
        })}


        <br />

        <Stack direction={"row"}
          sx={{ flexWrap: "wrap", justifyContent: "center" }} >


          <SwiperComponent />
          <ImageListMuiComponent />

        </Stack>

        <RealContact />


        <ContactForm />




      </Stack>
    );
  }
};


ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400

});
ScrollReveal().reveal('.card', { delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('.co', { delay: 500, origin: 'bottom' });

export default Home;
