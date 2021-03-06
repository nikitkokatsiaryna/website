export default class extends Stimulus.Controller {

    async createEducation() {
        $.ajax({
            type: 'post',
            url: '/education/',
            success: (response) => {
                Swal.fire(
                    'Created!',
                    'Your education has been created.',
                    'success'
                );
            },
            error: (response) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            },
        })
    }

}