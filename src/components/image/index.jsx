import classNames from "classnames";
import { forwardRef, useState } from "react";
import images from "~/assets/images";
import styles from "./Image.module.scss";

const Image = forwardRef(
    (
        {
            src,
            alt,
            className,
            fallBack: customFallBack = images.avatarDefault,
            ...props
        },
        ref
    ) => {
        const [fallBack, setFallBack] = useState("");
        const handleError = () => {
            setFallBack(customFallBack);
        };
        // eslint-disable-next-line jsx-a11y/alt-text
        return (
            <img
                className={classNames(styles.wrapper, className)}
                ref={ref}
                src={fallBack || src}
                alt={alt}
                {...props}
                onError={handleError}
            />
        );
    }
);

export default Image;
