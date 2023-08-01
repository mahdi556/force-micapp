import Doctor from "@/components/Doctor/Doctor"

const doctorPage = ({params})=>{    
    return(
        <>
        <Doctor id={params.id} />
        </>
    )
}
export default doctorPage