import { useEffect } from "react";
export const faindWidthWindow = (setWindowWidth: any) => {
    useEffect(() => {
        
        // Функция, которая будет вызвана при изменении размеров окна
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        // Вызываем handleResize сразу при монтировании компонента для установки начального значения
        handleResize();
    
        // Добавление слушателя события изменения размеров окна
        window.addEventListener('resize', handleResize);
    
        // Удаление слушателя события изменения размеров окна при размонтировании компонента
        return () => {
          window.removeEventListener('resize', handleResize);
        };

    }, []);
}