import React from "react";
import styles from "./CategoryCard.module.css";

const CategoryCard = ({name, bgColor, image}) => {
    return (
        <div className={`${styles.cardContainer} flex dir-col align-center`} style={{ backgroundColor: bgColor, border: `6px solid ${bgColor}` }}>
            <p>{name}</p>
            <div className={`${styles.imgContainer} flex dir-row justify-center align-center`}>
                <img className={styles.img} src={image} alt="category image" />
            </div>
        </div>
    )
};

export default CategoryCard;
