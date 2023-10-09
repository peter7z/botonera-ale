import { Button } from '../../components/button';
import './style.css';

export function Page() {
  return (
    <>
      La botonera del Ale
      <div class="container">
        <Button label="Dale tarao" audioUrl="/audio/dale-tarao.mp3" />
        <Button label="No gil" audioUrl="/audio/no-gil.mp3" />
        <Button label="Rama ven" audioUrl="/audio/rama-ven.mp3" />
        <Button label="A la mierda" audioUrl="/audio/a-la-mierda.mp3" />
        <Button label="No spik inglish" audioUrl="/audio/no-spik-ingliy.mp3" />
        <Button label="Nunca fallo" audioUrl="/audio/nunca-fallo.mp3" />
        <Button label="Para para" audioUrl="/audio/para.mp3" />
        <Button label="Paraaaaa" audioUrl="/audio/paraaa.mp3" />
        <Button label="Vamo al point" audioUrl="/audio/point.mp3" />
        <Button label="Ticra" audioUrl="/audio/ticra.mp3" />
        <Button label="Tienes fa?" audioUrl="/audio/tiene-fa.mp3" />
        <Button label="Vamo gil" audioUrl="/audio/vamo-gil.mp3" />
        <Button label="Vendo" audioUrl="/audio/vendo.mp3" />
      </div>
    </>
  );
}
