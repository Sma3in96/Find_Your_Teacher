import { reactive } from "vue";




export let sharedData = reactive({
    coaches : [
        {
            FullName : "farah fassal",
            Mail : "farah.fassal@gmail.com",
            Description : "farah is a CSS expert",
            Skills : "CSS, Html",
            Link : "farah_fassal",
            Whatsapp : "+212700365241",
            Price : "100",
            pic_link : ""
        },
        {
            FullName: "Sarah Johnson",
            Mail: "sarah.johnson@gmail.com",
            Description: "Sarah is a CSS expert",
            Skills: "React, Vue, HTML, CSS",
            Link: "sarah_johnson",
            Whatsapp: "+212861634689",
            Price: "362",
            pic_link: ""
        },
        {
            FullName: "Jennifer Brown",
            Mail: "jennifer.brown@gmail.com",
            Description: "Jennifer is a CSS expert",
            Skills: "React, HTML, CSS",
            Link: "jennifer_brown",
            Whatsapp: "+212681139747",
            Price: "490",
            pic_link: ""
        }
    ]
})
