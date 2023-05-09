package dataTransformer

import (
	"Jira_Connector/internal/jsonModels"
	"encoding/json"
	"log"
)

func ProjectsInBytesToStruct(bytes []byte) ([]jsonModels.Project, error) {
	var projects []jsonModels.Project
	err := json.Unmarshal(bytes, &projects)
	if err != nil {
		return nil, err
	}
	return projects, nil
}

func IssuesInBytesToStruct(bytes []byte) jsonModels.IssuesSearchResult {
	var issues jsonModels.IssuesSearchResult
	err := json.Unmarshal(bytes, &issues)
	if err != nil {
		log.Fatal(err)
	}
	return issues
}

func ProjectsInStructToBytes(projects []jsonModels.Project) []byte {
	var bytes []byte

	bytes, err := json.Marshal(projects)
	if err != nil {
		log.Fatal(err)
	}
	return bytes
}
