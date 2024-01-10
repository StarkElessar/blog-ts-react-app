import React, {DetailedHTMLProps, FC, HTMLAttributes} from "react";

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
	title: string;
}
export const BlockLabel: FC<IProps> = ({ className, title}) => {
	const combinedClassName = `label ${className || ""}`;

    return (
        <h2 className={combinedClassName}>{title}</h2>
    )
}