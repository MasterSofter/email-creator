import {EmailElement} from "../../../../../../../types/types";
import React , {useEffect} from "react";
import {Reorder, animate, MotionValue , useMotionValue} from "framer-motion";

const inactiveShadow = "0px 0px 0px rgba(0,0,0,0.8)";

function useRaisedShadow(value: MotionValue<number>) {
    const boxShadow = useMotionValue(inactiveShadow);

    useEffect(() => {
        let isActive = false;
        value.onChange((latest) => {
            const wasActive = isActive;
            if (latest !== 0) {
                isActive = true;
                if (isActive !== wasActive) {
                    animate(boxShadow, "5px 5px 10px rgba(0,0,0,0.3)");
                }
            } else {
                isActive = false;
                if (isActive !== wasActive) {
                    animate(boxShadow, inactiveShadow);
                }
            }
        });
    }, [value, boxShadow]);

    return boxShadow;
}

type Props = {
    item: EmailElement;
    isSelected: boolean;
    setSelectedTab:  React.Dispatch<React.SetStateAction<EmailElement>>;
}


export const Item = ({ item, isSelected, setSelectedTab}: Props) => {
    const y = useMotionValue(0);
    const boxShadow = useRaisedShadow(y);

    return (
        <Reorder.Item value={item}
                      id={item.getElementKey()}
                      style={ { color: isSelected ? "white" : "black" , backgroundColor: isSelected ? "#2470ff" : "#fff", boxShadow, y }}
                      onClick={() => setSelectedTab(item)}
        >
            <span>{item.getName()}</span>
        </Reorder.Item>
    );
};
