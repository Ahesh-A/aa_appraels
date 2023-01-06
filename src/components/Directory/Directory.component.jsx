import DirectoryItem from '../directory-item/directory-item.component';

import './Directory.styles.scss';
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
