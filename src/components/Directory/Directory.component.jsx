import DirectoryItem from "../directory-item/directory-item.component";

import '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/components/Directory/Directory.styles.scss';
const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
