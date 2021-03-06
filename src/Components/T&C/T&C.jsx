import React from "react";
import Footer from "../Footer/Footer.jsx";
import { Link } from "react-router-dom";
import logo from "../Header/LOGO.png";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { AppBar, Divider, Paper } from "@mui/material";
import deco from '../About/deco.png'
import deco2 from '../About/deco2.png'
import { amber, grey } from "@mui/material/colors";

const AppStyle = styled(AppBar)({
  opacity: 0.85,
  backgroundColor: "#b388ff",
  position: "fixed",
  justifyContent: "space-between",
  alignItems: "center"
});

const defaultTheme = createTheme();

const theme = createTheme({
  palette: {
    text: {
      primary: "#FFFFFF"
    }
  }
});

const Texto = styled(Typography)({
 color:grey[300],
//  padding: "1rem",
marginBottom: "1rem",
    
  });
 
const Divisor = styled(Divider)({
  borderColor: amber[500]

});

const BoxStyle = styled(Box)({
  display: "table-row",
  paddingTop: 150,
  justifyContent: "space-between",
  alignItems: "center",
  alignContent: "center",
  padding: "1rem",
  marginBottom: "1rem",
});

const Titulo = styled(Typography)({
  color: "white",
  fontSize: "45px"

});

const ImgStyle = styled("img")({
  maxHeight: 200,
  width: "auto"
})

const ContainerS = styled(Paper)({
  maxHeight: 200,
  width: "auto",
  background: 'linear-gradient(50deg,  #424242 40%, #4a148c  90%)',
  paddingLeft: 30
})

const Fondo = styled(Box)({
  background: 'linear-gradient(90deg,  #6200ea 20%,#651fff 40%, #aa00ff 90%)',
  backgroundSize: "cover",

  position: "relative",
})

export default function TyC() {
  return (
    <>
      <AppStyle>
        <Link to={'/'}><img src={logo} alt="img not found" /></Link>
      </AppStyle>

      {/* <Fondo> */}
      <Box style={{ display: "flex", justifyContent: "space-between", paddingTop: 60 }}>

        <ImgStyle src={deco2} alt="deco" />
        <Box
          height={100}
          width={500}
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="#f1c232"
          color="white"
          fontSize={24}
          position={"relative"}
          left={0}
          top={30}
          borderRadius={5}
        >
          <Titulo variant="bold">T??RMINOS Y CONDICIONES</Titulo>
        </Box>
        <ImgStyle src={deco} alt="deco" />
      </Box>
 <BoxStyle style={{padding:40}}>      
 <ContainerS><h3>Condiciones Generales:</h3></ContainerS>

<Texto style={{padding:40,fontSize: '20px', textAlign:'justify'}}>Por favor lea cuidadosamente estas condiciones generales del servicio antes de acceder a la p??gina Web. El acceso a la p??gina Web por parte del usuario del Servicio implica su consentimiento expreso y sin reservas a estos T??rminos y Condiciones de Uso. Si usted no est?? de acuerdo con estos por favor no use la Pagina Web. CINDIE se reserva el derecho, a su sola discreci??n, de cambiar, modificar, adicionar o remover partes de estas Condiciones en cualquier tiempo y sin previo aviso.

          En caso de los ni??os menores de 12 (doce) a??os se entender?? que cuentan con el consentimiento de sus padres, representantes legales o tutores asignados, de utilizar esta p??gina Web por lo que el acceso por parte de los menores ser?? bajo estricta responsabilidad de las personas antes mencionadas renunciando a realizar cualquier acci??n en contra de CINDIE y/o las marcas pertenecientes a la misma anunciadas en esta p??gina Web.

          De las responsabilidades Usted (El Usuario) se compromete a utilizar el Servicio de conformidad con la ley, estas Condiciones Generales, as?? como de acuerdo con la moral y las buenas costumbres y el orden p??blico. De la misma manera el Usuario se obliga a abstenerse de utilizar el Servicio con fines o efectos il??citos, contrarios a lo establecido en las Condiciones Generales, lesivos de los derechos e intereses de terceros o que de cualquier forma puedan da??ar, inutilizar, sobrecargar o deteriorar el Servicio o impedir la normal utilizaci??n o disfrute del Servicio por parte de los Usuarios.</Texto>


 
<Texto style={{padding:40,fontSize: '20px' ,textAlign:'justify'}}>El Usuario se obliga a usar los contenidos de forma diligente, correcta y l??cita y, en particular, se compromete a abstenerse de:</Texto>
 
<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>- Utilizar los contenidos de forma, con fines o efectos contrarios a la ley, a la moral y a las buenas costumbres o al orden p??blico;</Texto>
<Divisor variant="inset"  />
<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>- Reproducir o copiar, distribuir, permitir el acceso del p??blico a trav??s de cualquier modalidad de comunicaci??n p??blica, transformar o modificar los contenidos, a menos que se cuente con la autorizaci??n del titular de los correspondientes derechos o ello resulte legalmente permitido;</Texto>
<Divisor variant="inset"  />
<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>- Suprimir, eludir o manipular el "copyright" o derechos de autor y dem??s datos identificativos de los derechos de Vida de Pel??cula o de terceras personas incorporados a los Contenidos.</Texto>
<Divisor variant="inset"  />
<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>- Emplear los Contenidos y, en particular, la informaci??n de cualquier clase obtenida a trav??s del Servicio para remitir publicidad, comunicaciones con fines de venta directa o con cualquier otra clase de finalidad comercial, mensajes no solicitados dirigidos a una pluralidad de personas con independencia de su finalidad, as?? como a abstenerse de comercializar o divulgar de cualquier modo dicha informaci??n.</Texto>
<Divisor   />
<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>El Usuario responder?? de los da??os y perjuicios de cualquier naturaleza que CINDIE o sus marcas puedan sufrir, directa o indirectamente, como consecuencia del incumplimiento de cualquiera de las obligaciones derivadas de los presentes avisos legales o de la ley en relaci??n con la utilizaci??n del Servicio.</Texto>

<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>En ning??n momento CINDIE se har?? responsable por los da??os y perjuicios que puedan surgir por la falla o falta de disponibilidad del servicio. As?? como su continuidad y el funcionamiento del mismo y en particular a las fallas de acceso a las distintas p??ginas Web del servicio.</Texto>

<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>CINDIE, y sus colaboradores no ser??n responsables ante el Usuario por cualquier da??o directo, indirecto, incidental, especial y/o punitoria que resultase por cualquiera de las fallas antes mencionadas y de las que se describen a continuaci??n: </Texto>
 
<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>- Errores de software, virus, troyanos o similares que puedan ser transmitidos hacia o mediante nuestro sitio Web por cualquier tercero </Texto>
<Divisor variant="inset"  />
<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>- Error u omisi??n en cualquier contenido o por cualquier p??rdida o da??o de cualquier tipo incurrido como resultado del uso de cualquier contenido publicado en esta p??gina Web </Texto>
<Divisor variant="inset"  />
<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>- Adicionalmente CINDIE no tendr?? responsabilidad alguna por cualquier p??rdida causada por virus que puedan infectar la computadora del Usuario u otra propiedad por raz??n de usar, ingresar o bajar cualquier material de la p??gina Web, siempre ser?? bajo el propio riesgo del Usuario</Texto>
<Divisor variant="inset"  />
<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>La limitaci??n de responsabilidad antes mencionada se aplicar?? dentro de los l??mites m??ximos autorizados por la ley en la jurisdicci??n aplicable.</Texto>
<Divisor  />
<ContainerS><h3>De la Informaci??n:</h3></ContainerS>
 
<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>Cualquier informaci??n que sea introducida por el Usuario en los espacios disponibles al p??blico en general, ser?? propiedad de Vida de Pel??cula, por lo que ??ste podr?? utilizarla, reproducirla, modificarla, adaptarla o ponerla a disposici??n del p??blico, adem??s de estar facultado para utilizar los comentarios, ideas, sugerencias o cualquier informaci??n que el Usuario introduzca a este sitio, sin que esto genere alguna compensaci??n en el entendido que esta informaci??n se encuentre sujeta a las disposiciones legales en la materia aplicable.</Texto>
 
<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>CINDIE se reserva el derecho a evitar que se publiquen fotos, gr??ficos, material sonoro o de video que usted introduzca en los espacios disponibles al p??blico en general, que ??ste sean ilegales, inmorales, o bien, que vayan en contra de sus pol??ticas.</Texto>
 
<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>El Usuario declara expresamente y da su conformidad a lo siguiente.</Texto>
 
<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>- No se crear?? responsabilidad o garant??a alguna por la obtenci??n de informaci??n escrita ya sea consejo o de alg??n otro tipo obtenido desde esta p??gina Web.</Texto>
<Divisor variant="inset"  />
<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>- CINDIE no ser?? responsable por los contenidos en las comunicaciones que intercambien los usuarios del sitio de cualquier manera, ya que la p??gina no es m??s que un medio que facilita la comunicaci??n electr??nica.</Texto>
<Divisor variant="inset"  />
<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>Esta p??gina Web es presentada a los usuarios sobre la base de "como es" y "disponibilidad", por lo consiguiente CINDIE no da garant??as de ning??n tipo. Nos reservamos el derecho de restringir, suspender o terminar su ingreso a esta p??gina Web o a cualquier parte de la misma en cualquier momento y sin notificar al Usuario.</Texto>
<Divisor  />
<ContainerS><h3>De los productos:</h3></ContainerS>

<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>Los productos f??sicos, materiales, promociones e informaci??n que aparezca en esta p??gina Web est??n dirigidos a clientes de las marcas de CINDIE.</Texto>

<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>Los productos f??sicos que aparecen en esta p??gina Web son s??lo representaciones visuales y no est??n en tama??o real, color de embalaje, etc.</Texto>

<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>De la propiedad intelectual e Industrial.</Texto>

<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>Por el acceso a esta p??gina Web el usuario se compromete a no reproducir ni utilizar ning??n derecho de propiedad intelectual e industrial propiedad de CINDIE sin la autorizaci??n expresa de este.</Texto>
<Divisor  />
<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>El contenido de la p??gina Web incluidos a t??tulo enunciativo y no limitativo el texto, software, scripts, gr??ficos, fotos, sonido, m??sica, videos, caracter??sticas interactivas y similares, marcas comerciales, marcas de servicio, avisos comerciales, frases publicitarias, logos y dem??s relativos son propiedad de CINDIE y en algunos casos han sido utilizados para su uso no comercial trat??ndose de propiedad de terceros y est??n sujetos a las leyes aplicables en materia de propiedad industrial e intelectual.</Texto>

<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>CINDIE no concede licencia o autorizaci??n alguna de uso de ninguna clase sobre sus derechos de propiedad industrial e intelectual, o sobre cualquier otra propiedad o derecho relacionado con el uso de los contenidos.</Texto>
 
<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>El Usuario est?? autorizado a navegar por esta p??gina Web, bajar informaci??n al disco duro o con el prop??sito de distribuir a otros individuos, siempre y cuando se mantenga intacta la informaci??n y todos los avisos de derecho de autor y de propiedad industrial e intelectual, que aparezcan en las reproducciones. Queda estrictamente prohibido utilizar, copiar, reproducir, transmitir, exhibir, vender o distribuir con fines de lucro comercial la informaci??n que se obtenga de esta p??gina Web ni ser modificada o incorporada en alg??n otro trabajo o p??gina Web sin el permiso expreso del titular de los derechos.</Texto>
 
<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>En caso de violaci??n de los derechos de autor o propiedad intelectual</Texto>

<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>En el caso de que cualquier Usuario o un tercero consideren que cualquiera de los Contenidos ha sido introducido en la p??gina Web con violaci??n de sus derechos de propiedad intelectual con fines comerciales deber?? enviar una notificaci??n a CINDIE en la que se contengan los siguientes datos: </Texto>
 
<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>- Datos personales: nombre, direcci??n, n??mero de tel??fono y direcci??n de correo electr??nico del reclamante.</Texto>
<Divisor variant="inset"  />
<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>- Firma aut??ntica o equivalente, con los datos personales del titular de los derechos de propiedad intelectual supuestamente infringidos o de la persona autorizada para actuar en nombre y por cuenta del titular de los derechos de propiedad intelectual supuestamente infringidos.</Texto>
<Divisor variant="inset"  />
<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>- Indicaci??n precisa y completa de los Contenidos protegidos mediante los derechos de propiedad intelectual supuestamente infringidos, as?? como de su localizaci??n en la p??gina Web.</Texto>
<Divisor variant="inset"  />
<Texto style={{padding:40,fontSize: '20px',textAlign:'justify'}}>- Declaraci??n expresa y clara de que la utilizaci??n de los Contenidos indicados se ha realizado con fines comerciales y sin el consentimiento del titular de los derechos de propiedad intelectual para este fin.</Texto>
<Divisor variant="inset"  />
<Texto style={{padding:40, fontSize: '20px',textAlign:'justify'}}>- Declaraci??n expresa, clara y bajo la responsabilidad del reclamante de que la informaci??n proporcionada en la notificaci??n es exacta y de que la utilizaci??n de los Contenidos ha sido con fines comerciales y constituye una violaci??n de sus derechos de propiedad intelectual.</Texto>
<Divisor />
</BoxStyle> 

      
      <Footer />
      {/* </Fondo>  */}
    </>
  )
}
