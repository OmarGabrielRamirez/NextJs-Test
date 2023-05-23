import { NavBarTitle } from "../components/NavBarTitle/NavBarTitle.jsx"
import { CallToWhatsApp } from "../components/CallToWhatsApp/CallToWhatsApp.jsx"
import { ReportSiniester } from "../components/ReportSiniester/ReportSiniester.jsx"
import { FormTest } from "../components/FormTest/FormTest.jsx"

export default function Home() {
  return (
    <main>
      <NavBarTitle
        title={'Estamos cerca de ti en los momentos difíciles'}
        subtitle={'Siniestros'}>
      </NavBarTitle>
      <NavBarTitle
        title={'Estamos cerca de ti en los momentos difíciles'}
        subtitle={'Siniestros'}>
      </NavBarTitle>
      <CallToWhatsApp
        title={'¿Necesitas asesoría sobre la documentación que debes entregar?'}
        number={'55 4342 0068'}>
      </CallToWhatsApp>
      <ReportSiniester
        title={'Reportar siniestro'}
        subtitle={'Registra o reanuda el reporte de siniestro. '}
      >
      </ReportSiniester>
      {/* <FormTest
        title='FormULARIOS Test'
        subtitle='Next Js'>
      </FormTest> */}
    </main>
  )
}


