import styles from "./container.module.css"

export function LayoutContainer({className, children}) {

    return (
        <div className={`${styles.container} ${className}`}>
            {children}
        </div>
    );
}
