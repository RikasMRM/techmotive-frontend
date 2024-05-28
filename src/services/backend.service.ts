import { useQuery } from "@tanstack/react-query";
import { backendApi } from "./api";

export const useGetAllLocations = () => {
  return useQuery({
    queryKey: ["allLocations"],
    queryFn: async () => {
      const response = await backendApi.get("/location");
      return response.data;
    },
  });
};

export const useGetWorkflowOrders = (locationId: string) => {
  return useQuery({
    queryKey: ["workflowOrders", locationId],
    queryFn: async () => {
      const response = await backendApi.get(
        `/workflow-status/orders/${locationId}`
      );
      return response.data;
    },
    enabled: !!locationId,
  });
};
