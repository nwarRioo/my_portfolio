import { FC, ReactElement, useEffect, useState } from "react";
import styles from "./Demo.module.css";

const Demo: FC = (): ReactElement => {
    
    const bubbleDurations: number[] = [
        11, 23, 12, 10, 14, 23, 18, 16, 19, 20, 22, 25, 18, 21, 15, 13, 26, 17, 13, 28
    ];
    
    const [spans, setSpans] = useState<React.ReactElement[]>([]);
    
    const spanElements = bubbleDurations.map((el: number, i: number) => (
        <span key={i} style={{ "--i": el } as React.CSSProperties} />
    ));
    
    useEffect(() => setSpans(spanElements), []);
    
    return (
        <><div className={styles.demo}>
            <div className={styles.bubbles}>
                {spans}
            </div>
        </div>
        </>
    );
};

export default Demo;