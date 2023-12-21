import "@/styles/globals.css";
import "animate.css";
import { AnimatePresence, motion } from "framer-motion";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.2 }}
        >
          {getLayout(<Component {...pageProps} />)}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
