package connector

import (
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestGetAllProjects(t *testing.T) {
	expectedResponse := []byte(`{"projects":[{"key":"TEST","name":"Test Project","lead":{"name":"testusername","key":"testuserkey"}}]}`)

	handler := func(w http.ResponseWriter, r *http.Request) {
		w.Write(expectedResponse)
	}

	mockServer := httptest.NewServer(http.HandlerFunc(handler))
	defer mockServer.Close()

	oldServerUrl := serverUrl
	serverUrl = mockServer.URL

	resp := GetAllProjects()

	if string(resp) != string(expectedResponse) {
		t.Errorf("GetAllProjects() returned unexpected response. Expected: %s, got: %s", expectedResponse, resp)
	}

	serverUrl = oldServerUrl
}
