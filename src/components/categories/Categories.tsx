import react, {FC} from "react";


export interface IProps{
    categories: Categories[],
}
interface Categories{
    categoryName: string,
    color: string
}

export const Categories: FC<IProps>  = ({categories}) => {


  return (
      <>
        <div className={"categories-container"}>
            {categories.map(category => <div className={"category button-un-hover"}>
                <span className={"category__pentahedron"} style={{background: `${category.color}`}}></span>
                <span className={"category__name"}>{`${category.categoryName}`}</span>
            </div>)}
        </div>
      </>
  )
}