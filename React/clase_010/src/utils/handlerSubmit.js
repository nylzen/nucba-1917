import { reg_exImg } from './regExp';

export const handlerSubmit = form => {
  return new Promise((res, rej) => {
    // Retornamos las keys (nombre, id, img, name)
    const keys = Object.keys(form);

    if (keys.length < 5) {
      rej('Completa correctamente todos los datos, perri');
    }

    keys.forEach(key => {
      if (!form[key].trim()) {
        rej('Hay campos incompletos');
      }

      if (key === 'listeners') {
        form[key] <= 0 && rej('N de oyentes no valido');
      }

      if (key === 'img') {
        try {
          new URL(form[key]);
        } catch (error) {
          rej('No es una url');
        }

        if (!form[key].match(reg_exImg)) {
          rej('No es una imagen pa');
        }
      }
    });

    res(form);
  });
};
