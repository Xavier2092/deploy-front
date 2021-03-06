import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getCountries } from "../../redux/actions";
import { postMovie } from "../../redux/actions/index";
import { Box } from "@mui/system";
import { grey } from "@mui/material/colors";
import { validate } from "./validates";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import {
  MenuItemStyle,
  InputStyle,
  ButtonStyle,
  LabelStyle,
  SelectStyle,
  BoxStyle,
  sxSelectStyle,
  sxButtonStyle,
} from "../StyleMUI/StyleMUI";
import { SERVER_BACK } from "../../paths/path";

export function FilmForm() {
  //para validacion de errores
  const [errores, setErrores] = useState({ block: true });
  //para campo de actor y poder agregarlo al array de mainsActors
  const [actor, setActor] = useState("");
  //para campos de texto
  const [movieForm, setMovieForm] = useState({
    title: "",
    synopsis: "",
    year: "",
    duration: "",
    mainActors: [],
    url: "",
    director: "",
    associateProducer: "",
    genres: [],
    country: "",
    film: "a",
    port: "a",
  });
  //para la imagen de la portada
  const [multimedia, setMultimedia] = useState({ port: null, film: null });
  //constantes necesaria para el despacho de peticiones
  const dispatch = useDispatch();
  //paises y generos necesarios para el select
  const { countries, genres } = useSelector((state) => state);
  const { user } = useAuth0();
  //manejo de cambios en los campos
  const handleOnChange = (e) => {
    setMovieForm({
      ...movieForm,
      [e.target.name]: e.target.value,
    });
    setErrores(
      validate({
        ...movieForm,
        [e.target.name]: e.target.value,
      })
    );
  };
  //manejo de selecciones
  const selectMultimedia = (e) => {
    e.preventDefault();
    setMultimedia({ ...multimedia, [e.target.name]: e.target.files[0] });
  };
  //manejo de seleccion de generos
  const handleGenres = (e) => {
    if (!movieForm?.genres?.includes(e.target.value))
      setMovieForm({
        ...movieForm,
        [e.target.name]: [...movieForm.genres, e.target.value],
      });
  };

  function handleDeleteGenre(e) {
    setMovieForm({
      ...movieForm,
      genres: movieForm.genres.filter((data) => data !== e),
    });
  }

  function handleDeleteActors(e) {
    setMovieForm({
      ...movieForm,
      mainActors: movieForm.mainActors.filter((data) => data !== e),
    });
  }

  useEffect(() => {
    //Obtencion de los paises
    !countries?.length && dispatch(getCountries());
    //Obtencion de los generos
    !genres?.length && dispatch(getGenres());
  }, [countries?.length, genres?.length, dispatch]);
  //agregado de un actor a los personajes
  const handleElenco = (e) => {
    e.preventDefault();
    //comprobacion de un nombre no existente o nulo
    let comparacion = movieForm.mainActors.map((p) => {
      return p.toLowerCase();
    });
    console.log("COMPARACION", comparacion);
    if (!actor.trim() == "" && !comparacion.includes(actor.toLowerCase()))
      movieForm.mainActors.push(actor.trim());
    /* alert("Actor Invalido"); */ else
      Swal.fire({
        icon: "error",
        title: "Actor Inv??lido",
      });
    setActor("");
  };
  //manejador de envio del formulario
  const onSubmit = async (e) => {
    e.preventDefault();
    const objResponse = {};
    console.log("DATOS FRONT: ", multimedia);
    if (multimedia?.port) {
      //creacion del paquete de envio para subida de la portada
      const formPort = new FormData();
      //autor de la pelicula
      formPort.append("email", user.email);
      //tipo de la archivo
      formPort.append("tipo", "poster");
      //aclaracion de archivo subido
      formPort.append("extra", movieForm.title);
      //adicion de la imagen para la subida
      formPort.append("file", multimedia.port);
      //despacho de la subida directamente al back
      const rPort = (await axios.post(`${SERVER_BACK}/upload/inter`, formPort))
        ?.data;
      console.log("RESPUESTA IMAGEN: ", rPort);
      //lectura de una respuesta y seteo de la ruta de la imagen subida
      if (typeof rPort === "string") objResponse.port = rPort;
    }
    if (multimedia?.film) {
      //creacion del paquete de envio para subida de la peliculas
      const formFilm = new FormData();
      //autor de la pelicula
      formFilm.append("email", user.email);
      //tipo de la archivo
      formFilm.append("tipo", "poster");
      //aclaracion de archivo subido
      formFilm.append("extra", movieForm.title);
      //adicion de la pelicula para la subida
      formFilm.append("file", multimedia.film);
      //despacho de la subida directamente al back
      const rFilm = (await axios.post(`${SERVER_BACK}/upload/inter`, formFilm))
        ?.data;
      console.log("RESPUESTA Pelicula: ", rFilm);
      //lectura de una respuesta y seteo de la ruta de la imagen subida
      if (typeof rFilm === "string") objResponse.film = rFilm;
    }
    /* alert("Pelicula agregada correctamente."); */
    Swal.fire(
      "Formulario enviado correctamente",
      "Gracias por publicar tu contenido en CINDIE",
      "Su pelicula esta en proceso de evaluacion",
      "success"
    );
    //despacho de la accion para guardar una pelicula
    console.log("Datos actuales: ", movieForm);
    dispatch(postMovie({ ...movieForm, ...objResponse, email: user.email }));
  };
  //array de a??os para las peliculas
  const a??os = [];
  for (let i = 2022; i > 1950; i--) a??os.push(`${i}`);

  return (
    <Box
      sx={{
        backgroundColor: grey[100],
      }}
    >
      <h1>Sub?? tu proyecto a la red!</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <BoxStyle>
          {/* T??tulo */}
          <LabelStyle>T??tulo</LabelStyle>
          <InputStyle
            type="text"
            value={movieForm.title}
            placeholder="T??tulo de la Pel??cula"
            name="title"
            onChange={(e) => handleOnChange(e)}
            required
          />
          {errores?.title && <p class="errores">{errores.title}</p>}

          {/* P??ster */}
          <LabelStyle>P??ster</LabelStyle>
          <InputStyle
            type="file"
            accept="image/jpg image/png image/jpeg"
            name="port"
            placeholder="Portada de la Pelicula"
            onChange={(e) => selectMultimedia(e)}
            required
          />

          {/* Sinopsis */}
          <LabelStyle>Sinopsis</LabelStyle>
          <InputStyle
            type="text"
            value={movieForm.synopsis}
            placeholder="Sinopsis"
            name="synopsis"
            onChange={(e) => handleOnChange(e)}
            required
          />
          {errores?.synopsis && <p class="errores">{errores.synopsis}</p>}

          {/* G??neros */}
          <LabelStyle>G??neros *</LabelStyle>
          <SelectStyle
            name="genres"
            onChange={(e) => handleGenres(e)}
            select
            label="Generos"
            variant="outlined"
            size="small"
            sx={sxSelectStyle}
          >
            <MenuItemStyle hidden={true}>G??neros</MenuItemStyle>
            {genres?.map((genre) => (
              <MenuItemStyle key={genre.id} value={genre.name}>
                {genre.name}
              </MenuItemStyle>
            ))}
          </SelectStyle>
          {errores?.genres && <p class="errores">{errores.genres}</p>}

          {/* Pa??s */}
          <LabelStyle>Pa??s *</LabelStyle>
          <SelectStyle
            name="country"
            onChange={(e) => handleOnChange(e)}
            select
            label="Pais"
            variant="outlined"
            size="small"
            sx={sxSelectStyle}
          >
            <MenuItemStyle hidden={true}>Pa??ses</MenuItemStyle>
            {countries?.map((country) => (
              <MenuItemStyle key={country.id} value={country.id}>
                {country.name}
              </MenuItemStyle>
            ))}
          </SelectStyle>
          {errores?.genres && <p class="errores">{errores.genres}</p>}

          {/* A??o*/}
          <LabelStyle>A??o *</LabelStyle>

          <SelectStyle
            name="year"
            value={movieForm.year}
            onChange={(e) => handleOnChange(e)}
            select
            label="a??o"
            variant="outlined"
            size="small"
            sx={sxSelectStyle}
          >
            {a??os?.map((anio) => (
              <MenuItemStyle key={anio} value={anio}>
                {anio}
              </MenuItemStyle>
            ))}
          </SelectStyle>

          {/* Duraci??n */}
          <LabelStyle>Duraci??n *</LabelStyle>
          <SelectStyle
            name="duration"
            onChange={(e) => handleOnChange(e)}
            select
            label="Duracion"
            variant="outlined"
            size="small"
            sx={sxSelectStyle}
          >
            <MenuItemStyle hidden={true}>Duraci??n</MenuItemStyle>
            <MenuItemStyle key={1} value="Cortometraje">
              Cortometraje
            </MenuItemStyle>
            <MenuItemStyle key={2} value="Mediometraje">
              Mediometraje
            </MenuItemStyle>
            <MenuItemStyle key={3} value="Largometraje">
              Largometraje
            </MenuItemStyle>
          </SelectStyle>

          {/* Direcci??n */}
          <LabelStyle>Direcci??n</LabelStyle>
          <InputStyle
            type="text"
            value={movieForm.director}
            name="director"
            placeholder="Direcci??n"
            onChange={(e) => handleOnChange(e)}
            required
          />
          {errores?.director && <p class="errores">{errores.director}</p>}

          {/* Elenco */}
          <LabelStyle>Elenco *</LabelStyle>
          <InputStyle
            type="text"
            value={actor}
            placeholder="Actores"
            name="actor"
            onChange={(e) => setActor(e.target.value)}
          />
          <ButtonStyle
            sx={sxButtonStyle}
            type="button"
            name="elenco"
            onClick={(e) => handleElenco(e)}
          >
            A??adir
          </ButtonStyle>

          {/* Productora */}
          <LabelStyle>Productora Asociada</LabelStyle>
          <InputStyle
            type="text"
            value={movieForm.associateProducer}
            name="associateProducer"
            placeholder="Productora"
            onChange={(e) => handleOnChange(e)}
            // required
          />

          {/* Pel??cula Campo para subir una pelicula*/}
          <LabelStyle>Pel??cula Archivo*</LabelStyle>
          <InputStyle
            type="file"
            accept="video/mp4"
            name="film"
            placeholder="Subir Pel??cula.mp4"
            onChange={(e) => selectMultimedia(e)}
          />
          <LabelStyle>Pelicula Link *</LabelStyle>
          <InputStyle
            type="text"
            value={movieForm.url}
            name="url"
            placeholder="URL de la Pelicula"
            onChange={(e) => handleOnChange(e)}
            required
          />
          {errores?.url && <p class="errores">{errores.url}</p>}
          <ButtonStyle
            sx={sxButtonStyle}
            type="submit"
            disabled={errores.block}
          >
            Subir proyecto
          </ButtonStyle>
        </BoxStyle>
      </form>
      <div>
        {movieForm.genres.map((data) => (
          <div>
            <button key={data.id} onClick={() => handleDeleteGenre(data)}>
              {data}
            </button>
          </div>
        ))}
        {movieForm.mainActors.map((data) => (
          <div>
            <button key={data} onClick={() => handleDeleteActors(data)}>
              {data}
            </button>
          </div>
        ))}
      </div>
    </Box>
  );
}
