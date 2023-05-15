/*
position prop can be one of 'left-center' | 'left-top' | 'left-bottom' | 'center' | 
'center-top' | 'center-bottom' | 'right-center' | 'right-bottom' | 'right-top'
*/

type HorizontalPosition = "left" | "right" | "center";
type VerticalPosition = "top" | "center" | "bottom";

type ToastPosition = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

const Toast = ({ position }: ToastPosition) => {
  return <div>Toast notification position - {position}</div>;
};

export default Toast;
