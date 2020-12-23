export const getImgSrc = (data) => {
  if (data?.main_image) return data.main_image;
  if (data?.url) return data.url;
  if (data?.file) return data.file;
  if (data?.image) return data.image;
  if (data?.icon) return data.icon;
  return data?.images?.[0]?.file;
};
