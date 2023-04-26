package jsonModels

type Project struct {
	Self           string `json:"self,omitempty" structs:"self,omitempty"`
	ID             string `json:"id,omitempty" structs:"id,omitempty"`
	Key            string `json:"key,omitempty" structs:"key,omitempty"`
	Lead           User   `json:"lead,omitempty" structs:"lead,omitempty"`
	Name           string `json:"name,omitempty" structs:"name,omitempty"`
	ProjectTypeKey string `json:"projectTypeKey,omitempty" structs:"projectTypeKey,omitempty"`
}
