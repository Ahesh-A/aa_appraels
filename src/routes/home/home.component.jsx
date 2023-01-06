import { useState, useEffect } from "react";
import Directory from "../../components/Directory/Directory.component";


const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let data = require("/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/Data/catgeories.json");
    setCategories(data);
  }, [categories]);

  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
