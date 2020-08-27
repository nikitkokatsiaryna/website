export default class extends Stimulus.Controller {

    updateForm() {
        let experienceId = this.element.dataset.experienceId


        $.ajax({
            type: 'PATCH',
            url: `/experiences/${experienceId}/`,
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken')
            },

            success: (response) => {
                debugger
                this.element.outerHTML = response
            },
            error: (xhr, errmsg, err) => {
                toastr.error(errmsg)
            },
        })
    }

    preDeleteObject() {
        let press

        $.ajax(
            press = confirm('Do you realy want to delete the form?'))
        if (press) {
            this.deleteObject()
        }
    }

    deleteObject() {
        let experienceId = this.element.dataset.experienceId


        $.ajax({
            type: 'DELETE',
            url: `/experiences/${experienceId}/`,
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken')
            },

            success: (response) => {
                debugger
                toastr.success('Successfully deleted')
            },
            error: (xhr, errmsg, err) => {
                debugger
                toastr.error(errmsg)
            },
        })
    }
}