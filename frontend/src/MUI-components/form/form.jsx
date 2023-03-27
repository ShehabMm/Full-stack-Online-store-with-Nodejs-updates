import Typography from '@mui/material/Typography'


import ScrollReveal from 'scrollreveal';




const stats = [
  {
    data: "35K",
    title: "Customers"
  },
  {
    data: "10K+",
    title: "Downloads"
  },
  {
    data: "40+",
    title: "Countries"
  },
  {
    data: "30M+",
    title: "Total revenue"
  },
]

const ContactForm = () => {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <ul className="flex flex-col items-center justify-center gap-x-12 gap-y-10 sm:flex-row sm:flex-wrap md:gap-x-24">
          {
            stats.map((item, idx) => (
              <li key={idx} className="text-center">
                <Typography className="letters" variant="h4" color="primary">{item.data}</Typography>
                <p className="mt-3 text-gray-600 font-medium">{item.title}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
}
ScrollReveal({    
  reset: true,
  distance:"60px",
  duration:2500,
  delay:400
  
  });
  ScrollReveal().reveal('.letters', { delay: 700, origin:'bottom',interval:200 });

export default ContactForm;
