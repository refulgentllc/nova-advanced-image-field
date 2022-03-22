import IndexField from 'baseresource/components/IndexField'
import DetailField from 'baseresource/components/DetailField'
import FormField from 'baseresource/components/FormField'

Nova.booting((Vue) => {
    Vue.component('index-advanced-image-field', IndexField)
    Vue.component('detail-advanced-image-field', DetailField)
    Vue.component('form-advanced-image-field', FormField)
})
