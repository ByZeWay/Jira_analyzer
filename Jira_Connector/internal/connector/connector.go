package connector

import (
	"Jira_Connector/internal/config"
	"io"
	"log"
	"net/http"
)

func GetAllProjects() []byte {
	var projectEndpoint = config.Instance.ConnectorSettings.JiraURL + "project?expand=lead"

	resp, err := getRespBody(projectEndpoint)
	if err != nil {
		log.Fatal(err)
	}

	return resp
}

func GetAllIssues(projectName string) []byte {
	var endpointBegin = config.Instance.ConnectorSettings.JiraURL + "search?jql=project=\""
	var endpointEnd = "\"&expand=changelog"

	issuesEndpoint := endpointBegin + projectName + endpointEnd

	resp, err := getRespBody(issuesEndpoint)
	if err != nil {
		log.Fatal(err)
	}

	return resp
}

func getRespBody(endpoint string) ([]byte, error) {
	resp, err := http.Get(endpoint)
	if err != nil {
		return nil, err
	}

	defer resp.Body.Close()
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	return body, nil
}
