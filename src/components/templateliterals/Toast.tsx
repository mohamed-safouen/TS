type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPostion = 'top' | 'center' | 'bottom'
type ToastProps = {
    position :  Exclude<`${HorizontalPosition}-${VerticalPostion}`,'center-center'> | 'center'
}
export const Toast = ({position}:ToastProps)=>{
    return <div>
        Toast Notification Position - {position}
    </div>
}