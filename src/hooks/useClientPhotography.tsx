import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { ClientProps, UploadData } from "../utils/interfaces";
import { addNewAlbum, allclientsAlbums, clientAlbum } from "../api/firebase";

interface FilterClientProps {
  client?: string;
}

export default function useClientPhotography(
  filter: Partial<FilterClientProps> = {}
) {
  const queryClient = useQueryClient();
  const { client } = filter;

  //Get All Clients Albums
  const clientsAlbums: UseQueryResult<ClientProps[], Error> = useQuery({
    queryKey: ["Client"],
    queryFn: async () => await allclientsAlbums(),
    // @ts-ignore
    config: {
      staleTime: 1000 * 60,
      keepPreviousData: true,
    },
  });

  //Get Client by ID
  const fetchClientAlbum: UseQueryResult<ClientProps | null, Error> = useQuery({
    queryKey: ["clientPhotography", filter],
    queryFn: async () => await clientAlbum({ client }),
  });

  //Admin add client Album
  const addClientAlbum = useMutation({
    mutationFn: async ({ files, name, password, coverImage }: UploadData) => {
      console.log(files, name, password, coverImage);
      if (files !== undefined && coverImage !== undefined) {
        return await addNewAlbum(files, name, password, coverImage);
      }
    },
    onSuccess: async () =>
      await queryClient.invalidateQueries({ queryKey: ["Client"] }),
  });

  //Admin edit client Album
  //   const editSafari = useMutation({
  //     mutationFn: async ({ safari, id, url }: SafariUpdate) =>
  //       await updateSafari(safari, url, id),
  //     onSuccess: async () => {
  //       await (queryClient.invalidateQueries as (key: string | string[]) => void)(
  //         "safaris"
  //       );
  //     },
  //   });

  return {
    clientsAlbums,
    fetchClientAlbum,
    addClientAlbum,
  };
}
