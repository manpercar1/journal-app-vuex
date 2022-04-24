export default {

    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'daybook-no-entry',
            component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/daybook/views/NoEntrySelected.vue')
        },
        {
            path: ':id',
            name: 'daybook-entry',
            component: () => import(/* webpackChunkName: "daybook-entry" */ '@/modules/daybook/views/EntryView.vue')
        }
    ]

}