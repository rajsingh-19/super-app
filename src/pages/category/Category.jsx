import React from "react";
import styles from "./category.module.css";
import categories from "../../db/categoriesDb";
import CategoryCard from "../../components/card/CategoryCard";

const Category = () => {

    return (
        <div className={`${styles.categoryPage} flex dir-row`}>
            <div className={`${styles.descContainer} flex dir-col justify-center align-center`}>
                <p>Super app</p>
                <div>
                    <p>Choose your</p>
                    <p>entertainment</p>
                    <p>category</p>
                </div>
            </div>
            {/*         categories section     */}
            <div className={`${styles.cardSection} flex dir-col justify-center`}>
                <div className={`${styles.cardContainer} grid`}>
                {
                    categories.map(({name, bgColor, image}, index) => {
                        return (
                            <div key={index}>
                                <CategoryCard name={name} bgColor={bgColor} image={image} />
                            </div>
                        )
                    })
                }
                </div>
                <div className={styles.btnContainer}>
                    <button className={`${styles.nextBtn} outline-none border-none cursor-pointer text-center`}>Next Page</button>
                </div>
            </div>
        </div>
    )
};

export default Category;
