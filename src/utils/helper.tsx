import swal from "sweetalert";


const showSwal = (title: string, icon?: string, buttons?: boolean | string) => {
  swal({ title, icon, buttons: buttons as any });
};

export { showSwal };
