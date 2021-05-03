import swal from 'sweetalert';


export const CustomAlert = (title, text, icon) => {
    swal({
        title: title,
        text: text,
        icon: icon,
    });
}

export const formatString = (str) => str.split('.').map(name => ({name}));
