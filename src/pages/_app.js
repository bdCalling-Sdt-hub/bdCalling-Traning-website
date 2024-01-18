import "@/styles/globals.css";
import "animate.css";
import { AnimatePresence, motion } from "framer-motion";
import { SessionProvider } from "next-auth/react";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
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
    </SessionProvider>
  );
}
