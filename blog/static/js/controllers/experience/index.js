import BaseController from '../base.js'

export default class extends BaseController {

    static targets = ["name"]

    connect() {
        if (this.element.dataset.load === 'true') {
            this.load()
            return
        }
    }

    loadForm() {
        $.ajax({
            type: 'get',
            url: '/experiences/new',
            success: (response) => {
                this.getController('modal').element.innerHTML = response
            }
        })
    }

    editForm(event) {
        let experienceId = event.currentTarget.dataset.id;

        $.ajax({
            type: 'get',
            url: `/experiences/${experienceId}/edit/`,
            success: (response) => {
                // debugger
                this.getController('modal').element.innerHTML = response
            },
            error: (response) => {
                // debugger
            },
        })
    }

    async deleteObject(event) {
        let result = await Swal.fire({
            title: 'Are you sure?',
            text: "Do you realy want to delete this experience?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
        if (result.dismiss) return


        let experienceId = event.target.dataset.id


        $.ajax({
            type: 'DELETE',
            url: `/experiences/${experienceId}/`,
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken')
            },

            success: (response) => {
                debugger
                // toastr.success('Successfully deleted')
                Swal.fire(
                    'Deleted!',
                    'Your experience has been deleted.',
                    'success'
                );
                this.load()
            },
            error: (responce) => {
                debugger
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            },
        })


    }

}