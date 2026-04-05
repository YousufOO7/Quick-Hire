import { useGetConfigQuery } from "@/app/redux/features/settings/config/configApi";


export const useAppConfig = () => {
  const { data, isLoading, refetch } = useGetConfigQuery([]);

  const config = data?.data || {};

  return {
    isLoading,
    refetch,

    platformName: config.platform_name,
    primaryColor: config.primary_brand_color,
    secondaryColor: config.secondary_brand_color,
  };
};
