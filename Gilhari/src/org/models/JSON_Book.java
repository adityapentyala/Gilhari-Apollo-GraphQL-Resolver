package org.models;
import org.json.JSONException;
import org.json.JSONObject;
import com.softwaretree.jdx.JDX_JSONObject;
/**
 * A shell (container) class defining a domain model object class for Employee objects
 * based on the class JSONObject.  This class needs to define just two constructors.
 * Most of the processing is handled by the superclass JDX_JSONObject.
 * 
 *
 *
 */
public class JSON_Book extends JDX_JSONObject {

    public JSON_Book() {
        super();
    }

    public JSON_Book(JSONObject jsonObject) throws JSONException {
        super(jsonObject);
    }
}