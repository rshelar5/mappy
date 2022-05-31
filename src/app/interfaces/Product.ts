export interface Product{
  properShippingName: string,
  hazmatClassification?: string,
  hazmatCategory?: string,
  classification?: string,
  casnumber?: string,
  packingGroup?: string,
  unid?: string,
  lehs?: string
}

export interface PureIngredient{
  properShippingName: string,
  hazmatClass?: string,
  hazmatCategory?: string,
  casnumber?: string,
  packingGroup?: string,
  unid?: string,
  lehs?: string
}

