import useData from '../datas/useData';

const useDataId = (id) => {
  const datas = useData();
  return datas.find((location) => location.id === id);
  // Utilise la méthode .find() pour rechercher un objet
  //avec un "id" correspondant à celui fourni.
};

export default useDataId;