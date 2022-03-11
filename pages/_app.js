import "../styles/globals.css";
import { motion } from "framer-motion";
import Header from "../components/Header";

function MyApp({ Component, pageProps, router }) {
  return (
    <div>
      <motion.div
      // key={router.route}
      // initial="pageInitial"
      // animate="pageAnimate"
      // variants={{
      //   pageInitial: {
      //     opacity: 0,
      //   },
      //   pageAnimate: {
      //     opacity: 1,
      //   },
      // }}
      >
        <Component {...pageProps} />
      </motion.div>
    </div>
  );
}

export default MyApp;
