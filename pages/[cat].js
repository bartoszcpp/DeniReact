import { useRouter } from "next/router";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroungImage";
import CategoryComponent from "../components/CategoryComponent";

const cat = () => {
  const router = useRouter();
  const { cat } = router.query;

  return (
    <>
      <Header />
      <BackgroundImage />
      <CategoryComponent cat={cat} />
    </>
  );
};

export default cat;
