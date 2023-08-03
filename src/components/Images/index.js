import { useState, forwardRef } from 'react';
import classNames from 'classnames';

import styles from './Image.module.scss';
import images from '~/assets/images';

const Images = forwardRef(({ src, className, fallBack: customFallBack = images.noAvatar, alt, ...pops }, ref) => {
    const [fallBack, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(customFallBack);
    };

    return (
        <img
            className={classNames(styles.wrraper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...pops}
            onError={handleError}
        />
    );
});

export default Images;

// // Orther
// function Images ({ ...pops })  {
//     return <img {...pops}/>;
// };

// export default forwardRef(Images);
